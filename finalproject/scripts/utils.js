/* scripts/utils.js - Shared Utility Functions */

export function getFormattedDate() {
    return new Date().getFullYear();
}

export function updateLastModified() {
    return `Last Modification: ${document.lastModified}`;
}