import { Add, RemoveCircleOutlineRounded, RemoveCircleRounded } from '@mui/icons-material';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { postCreateCommittee } from 'src/services/services';
import { useCommitteeContract } from 'src/states/contracts/committee';
import { useWalletData } from 'src/states/wallet';
import { v4 as uuidv4 } from 'uuid';
import { Field, PublicKey, fetchAccount, Mina } from 'o1js';
import { IPFSHash } from '@auxo-dev/auxo-libs';
// import { MemberArray } from '@auxo-dev/dkg/build/types/src/contracts/Committee';
import { ZkApp } from '@auxo-dev/dkg';
export type TDataPost = {
    name: string;
    creator: string;
    network: string;
    t: number;
    n: number;
    members: { name: string; address: string; id: string }[];
};

export default function ModalCreateCommittee() {
    const { userAddress, userPubKey } = useWalletData();
    const { workerClient } = useCommitteeContract();
    const [dataPost, setDataPost] = useState<TDataPost>({ creator: userAddress, network: 'Berkery', t: 1, n: 1, members: [{ id: uuidv4(), address: '', name: '' }], name: '' });

    function changeDataPost(dataPost: Partial<TDataPost>) {
        return setDataPost((prev) => {
            return {
                ...prev,
                ...dataPost,
            };
        });
    }

    function changeMemberData(index: number, data: Partial<TDataPost['members'][0]>) {
        setDataPost((prev) => {
            return {
                ...prev,
                members: prev.members.map((item, i) => {
                    if (index == i) {
                        return { ...item, ...data };
                    }
                    return item;
                }),
            };
        });
    }
    function addMemberAddress() {
        setDataPost((prev) => {
            const member = [...prev.members];
            member.push({ address: '', name: '', id: uuidv4() });
            return {
                ...prev,
                n: member.length,
                members: member,
            };
        });
    }
    function removeMember(index: number) {
        setDataPost((prev) => {
            const member = [...prev.members];
            member.splice(index, 1);
            const t = prev.t > member.length ? member.length : prev.t;
            return {
                ...prev,
                n: member.length,
                t: t,
                members: member,
            };
        });
    }

    function changeT(value: string) {
        const valueToNumber = Number(value);
        if (isNaN(valueToNumber)) return;

        setDataPost((prev) => {
            if (valueToNumber > prev.n) return prev;
            return {
                ...prev,
                t: valueToNumber,
            };
        });
    }

    function checkValid() {
        if (!dataPost.name) {
            toast('Name of committee is required!', { type: 'error', position: 'top-center' });
            return false;
        }
        if (!dataPost.creator) {
            toast('Creator is required! Connect your wallet first!', { type: 'error', position: 'top-center' });
            return false;
        }
        if (!dataPost.network) {
            toast('Select network is required!', { type: 'error', position: 'top-center' });
            return false;
        }
        if (!dataPost.members.every((member) => member.address != '')) {
            toast('Member address should not be empty!', { type: 'error', position: 'top-center' });
            return false;
        }

        return true;
    }

    async function createCommitee() {
        if (checkValid()) {
            if (userPubKey == null) throw new Error('You have not connected to your wallet yet!');
            try {
                const response = await postCreateCommittee({ name: dataPost.name, creator: dataPost.creator, network: dataPost.network });
                const ipfsHash = response.Hash;

                await workerClient?.fetchAccount(userAddress);
                await workerClient?.createCommittee(userPubKey, {
                    addresses: ZkApp.Committee.CheckMemberInput.from(dataPost.members.map((member) => PublicKey.fromBase58(member.address))),
                    threshold: new Field(dataPost.t),
                    ipfsHash: IPFSHash.fromString(ipfsHash),
                });
                toast('Create transaction and proving...', { type: 'info', position: 'top-center' });
                await workerClient?.proveTransaction();

                const transactionJSON = await workerClient?.getTransactionJSON();
                console.log(transactionJSON);

                let transactionFee = 0.1;
                toast('Prove tx success! Sending transaction...', { type: 'info', position: 'top-center' });

                const { hash } = await window.mina!.sendTransaction({
                    transaction: transactionJSON,
                    feePayer: {
                        fee: transactionFee,
                        memo: '',
                    },
                });
                const transactionLink = `https://berkeley.minaexplorer.com/transaction/${hash}`;
                console.log(transactionLink);
                toast('Send transaction successful!', { type: 'success', position: 'top-center' });
            } catch (error) {
                console.log(error);
                toast((error as Error).message, { type: 'error', position: 'top-center' });
            }
        }
    }

    return (
        <Box>
            <TextField sx={{ mb: 2 }} label="Committee Name" fullWidth type="text" name="name_committee" value={dataPost.name} onChange={(e) => changeDataPost({ name: e.target.value })} />
            <Box sx={{ display: 'flex', placeItems: 'center', gap: 3 }}>
                <TextField fullWidth label="Creator Address" type="text" name="creator_committee" value={dataPost.creator} onChange={(e) => changeDataPost({ creator: e.target.value })} />

                {/* <FormControl sx={{ minWidth: 120 }} fullWidth size="small">
                    <InputLabel id="create-committee-label">Network</InputLabel>
                    <Select labelId="create-committee-label" label="Network" value={dataPost.network} onChange={(e) => changeDataPost({ network: e.target.value as string })}>
                        <MenuItem value={'Berkery'}>Berkery</MenuItem>
                        <MenuItem value={'Devnet'}>Devnet</MenuItem>
                        <MenuItem value={'Mainnet'}>Mainnet</MenuItem>
                    </Select>
                </FormControl> */}
            </Box>

            <Box mt={3}>
                {/* <Typography mb={2}>{'Usage Threshold'}</Typography> */}
                <TextField
                    fullWidth
                    value={dataPost.t}
                    helperText={`T out of N. Number of Committee member. N = ${dataPost.n}`}
                    onChange={(e) => changeT(e.target.value)}
                    variant="outlined"
                    label="Usage Threshold T"
                    type="text"
                    name="t_committee"
                />
                {/* <TextField value={dataPost.n} InputProps={{ readOnly: true }} variant="outlined" label="N" type="text" name="n_committee" sx={{ width: '150px' }} /> */}
            </Box>

            <Box mt={3}>
                <Box sx={{ display: 'flex' }} mb={2}>
                    <Typography color={'primary.main'} fontWeight={600}>
                        Committee Members
                    </Typography>
                    <Button variant="outlined" sx={{ ml: 'auto' }} onClick={addMemberAddress} size="small">
                        Add
                    </Button>
                    {/* <Typography ml={'auto'}>N = {dataPost.n}</Typography> */}
                </Box>

                {dataPost.members.map((member, index) => {
                    return (
                        <Box key={member.id} sx={{ display: 'flex', gap: 2, placeItems: 'center', cursor: 'pointer', mb: 1 }}>
                            <Typography variant="body2" fontWeight={600} color={'primary.main'}>
                                #{(index + 1).toString().padStart(2, '0')}
                            </Typography>
                            <TextField
                                value={dataPost.members[index].name}
                                onChange={(e) => changeMemberData(index, { name: e.target.value })}
                                fullWidth
                                variant="outlined"
                                label={`Alias (optional)`}
                                type="text"
                                name="name_member_committee"
                            />
                            <TextField
                                value={dataPost.members[index].address}
                                onChange={(e) => changeMemberData(index, { address: e.target.value })}
                                fullWidth
                                variant="outlined"
                                label={`Address`}
                                type="text"
                                name="address_member_committee"
                            />

                            <RemoveCircleOutlineRounded
                                sx={{ fontSize: '25px', display: dataPost.members.length == 1 ? 'none' : 'block', opacity: 0.66, color: 'primary.light' }}
                                onClick={() => removeMember(index)}
                            />
                        </Box>
                    );
                })}
            </Box>

            <Box mt={5} textAlign={'right'}>
                <ButtonCreate onClick={createCommitee} />
            </Box>
        </Box>
    );
}

function ButtonCreate({ onClick }: { onClick: () => Promise<void> }) {
    const [loading, setLoading] = useState<boolean>(false);
    async function _onClick() {
        setLoading(true);
        await onClick();
        setLoading(false);
    }
    return (
        <Button variant="contained" onClick={_onClick}>
            {loading ? 'Loading...' : 'Create'}
        </Button>
    );
}
