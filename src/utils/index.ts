export function isNumeric(num: any) {
    return !isNaN(num) && !isNaN(parseFloat(num));
}

export function getLocalStorageKeySecret(committeeId: string, memberId: string, keyId: string, network: string) {
    return `secret-${committeeId}-${keyId}-${memberId}-${network}`;
}

export function getLocalStorageKeySecretValue(committeeId: string, memberId: string, keyId: string, network: string) {
    return localStorage.getItem(getLocalStorageKeySecret(committeeId, memberId, keyId, network));
}

export function downloadTextFile(content: string, filename: string) {
    const blob = new Blob([content], { type: 'text/plain' });

    // Creating a download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;

    // Simulating a click on the link to trigger the download
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}
