import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { imagePath } from 'src/constants/imagePath';
import { headerHeight, sibarWidth } from '../Layout';
import { useRouter } from 'next/router';
import { menu } from '../menu';
import Link from 'next/link';

export default function Sidebar() {
    return (
        <Box sx={{ position: 'fixed', top: 0, left: 0, zIndex: 999 }}>
            <Box className="sidebar_bg" sx={{ position: 'absolute', top: 0, left: 0 }}></Box>
            <Box
                className="sidebar_main"
                sx={{
                    width: sibarWidth,
                    height: '100svh',
                    overflow: 'auto',
                    bgcolor: '#F1F6F5',
                }}
            >
                <Box sx={{ height: headerHeight, display: 'flex', pl: 3, placeItems: 'center' }}>
                    <Image src={imagePath.LOGO_FULLLL_GREEN} alt="logo auxo" style={{ width: '90px', height: 'auto' }} />
                </Box>

                <Box className="menu" mt={1} px={1}>
                    {menu.map((item, index) => {
                        return <MenuItem index={index} key={'menu' + item.title + index}></MenuItem>;
                    })}
                </Box>
            </Box>
        </Box>
    );
}

function MenuItem({ index }: { index: number }) {
    const route = useRouter();
    // console.log(route);
    const menuItem = menu[index];
    const IconItem = menuItem.icon;
    const activeItem = route.pathname.indexOf(menuItem.url) == 0;
    return (
        // <Box sx={{ background: activeItem ? '#043E35' : '' }}>
        <Box mb={1}>
            <Link href={menuItem.url} passHref style={{ textDecoration: 'none', color: 'unset' }}>
                <Box
                    sx={{
                        borderRadius: '12px',
                        display: 'flex',
                        placeItems: 'center',
                        cursor: 'pointer',
                        background: activeItem ? '#CFE9E4' : '',
                        '&:hover': { background: activeItem ? '' : '#dbedea' },
                    }}
                >
                    <Box sx={{ width: '50px', height: '46px', display: 'flex', justifyContent: 'center', placeItems: 'center' }}>
                        <IconItem sx={{ fontSize: '24px', color: activeItem ? 'primary.main' : 'primary.light' }} />
                    </Box>
                    <Box>
                        <Typography variant="body2" fontWeight={600} sx={{ color: activeItem ? 'primary.main' : 'primary.light' }}>
                            {menuItem.title}
                        </Typography>
                    </Box>
                </Box>
            </Link>

            {menuItem.children.map((item, j) => {
                return <SubMenuItem key={j + item.title + index} indexParent={index} indexSubmenu={j} />;
            })}
        </Box>
    );
}

function SubMenuItem({ indexParent, indexSubmenu }: { indexParent: number; indexSubmenu: number }) {
    const route = useRouter();
    // console.log(route);
    const subMenu = menu[indexParent].children[indexSubmenu];
    const activeItem = route.pathname.indexOf(subMenu.url) == 0;

    return (
        <Box>
            <Link href={subMenu.url} passHref style={{ textDecoration: 'none', color: 'unset' }}>
                <Box sx={{ display: 'flex', placeItems: 'center', cursor: 'pointer', '&:hover': { background: activeItem ? '' : '#F1F6F5' } }}>
                    <Box sx={{ width: '50px', height: '46px', display: 'flex', justifyContent: 'center', placeItems: 'center' }}></Box>
                    <Box>
                        <Typography variant="body2" fontWeight={600} sx={{ color: activeItem ? 'secondary.main' : 'primary.light' }}>
                            {subMenu.title}
                        </Typography>
                    </Box>
                </Box>
            </Link>
        </Box>
    );
}
