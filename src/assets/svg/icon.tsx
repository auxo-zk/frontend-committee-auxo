import MuiSvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

export type SvgComponent = React.FC<SvgIconProps>;

export const IconUser: SvgComponent = (props) => {
    return (
        <MuiSvgIcon {...props} viewBox="0 0 24 24" fill="none">
            <path d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 20V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V20H4Z" />
        </MuiSvgIcon>
    );
};

export const IconMenuExplorer: SvgComponent = (props) => {
    return (
        <MuiSvgIcon {...props} viewBox="0 0 24 24" fill="none">
            <path d="M11.1111 20.5333L4.88889 16.9556C4.60741 16.7926 4.38889 16.5778 4.23333 16.3111C4.07778 16.0444 4 15.7481 4 15.4222V8.35556C4 8.02963 4.07778 7.73333 4.23333 7.46667C4.38889 7.2 4.60741 6.98519 4.88889 6.82222L11.1111 3.24444C11.3926 3.08148 11.6889 3 12 3C12.3111 3 12.6074 3.08148 12.8889 3.24444L19.1111 6.82222C19.3926 6.98519 19.6111 7.2 19.7667 7.46667C19.9222 7.73333 20 8.02963 20 8.35556V15.4222C20 15.7481 19.9222 16.0444 19.7667 16.3111C19.6111 16.5778 19.3926 16.7926 19.1111 16.9556L12.8889 20.5333C12.6074 20.6963 12.3111 20.7778 12 20.7778C11.6889 20.7778 11.3926 20.6963 11.1111 20.5333ZM11.1111 12.4V18.4889L12 19L12.8889 18.4889V12.4L18.2222 9.31111V8.37778L17.2667 7.82222L12 10.8667L6.73333 7.82222L5.77778 8.37778V9.31111L11.1111 12.4Z" />
        </MuiSvgIcon>
    );
};

export const IconInvestor: SvgComponent = (props) => {
    return (
        <MuiSvgIcon
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 122.88 111.09"
            sx={{ enableBackground: 'new 0 0 122.88 111.09', '.st0-invest': { fillRule: 'evenodd', clipRule: 'evenodd' }, ...props.sx }}
            xmlSpace="preserve"
        >
            <style type="text/css"></style>
            <g>
                <path
                    className="st0-invest"
                    d="M36.25,39.13c-1.13,0.05-1.99,0.28-2.57,0.67c-0.33,0.22-0.58,0.51-0.74,0.85c-0.17,0.38-0.26,0.84-0.24,1.37 c0.05,1.55,0.85,3.58,2.43,5.92l0.02,0.04l0,0l5.11,8.1c2.05,3.25,4.19,6.57,6.86,9.01c2.56,2.34,5.67,3.92,9.78,3.94 c4.45,0.01,7.71-1.64,10.35-4.11c2.75-2.57,4.92-6.1,7.06-9.62l5.74-9.47c1.08-2.44,1.46-4.08,1.21-5.04 c-0.15-0.57-0.77-0.86-1.85-0.9c-0.23-0.01-0.46-0.02-0.7-0.01c-0.26,0.01-0.52,0.03-0.8,0.05c-0.16,0.02-0.3,0-0.44-0.03 c-0.51,0.03-1.04-0.01-1.57-0.08l1.97-8.71c-14.61,2.3-25.53-8.55-40.97-2.17l1.11,10.27C37.38,39.23,36.79,39.21,36.25,39.13 L36.25,39.13L36.25,39.13L36.25,39.13z M122.09,90.14c0.51,0.85,0.79,1.76,0.79,2.71c0,5-7.74,9.06-17.28,9.06 c-9.54,0-17.28-4.06-17.28-9.06c0-0.94,0.28-1.85,0.79-2.71c2.2,3.68,8.75,6.35,16.49,6.35C113.35,96.49,119.9,93.82,122.09,90.14 L122.09,90.14L122.09,90.14z M111.84,71.42l-0.2,2.25l-8.48-0.74c0.7,0.89,1.18,1.91,1.45,3.05l-2.04-0.18 c-0.14-0.6-0.45-1.27-0.92-2c-0.48-0.74-1.06-1.26-1.76-1.58l0.16-1.82L111.84,71.42L111.84,71.42L111.84,71.42L111.84,71.42z M105.6,67.9c7.84,0,14.2,2.5,14.2,5.57c0,3.08-6.36,5.57-14.2,5.57c-7.84,0-14.2-2.5-14.2-5.57C91.4,70.39,97.76,67.9,105.6,67.9 L105.6,67.9L105.6,67.9z M105.6,66.05c9.54,0,17.28,4.06,17.28,9.06c0,5-7.74,9.06-17.28,9.06c-9.54,0-17.28-4.06-17.28-9.06 S96.06,66.05,105.6,66.05L105.6,66.05L105.6,66.05z M122.15,81.15c0.47,0.82,0.73,1.7,0.73,2.6c0,5-7.74,9.06-17.28,9.06 c-9.54,0-17.28-4.06-17.28-9.06c0-0.91,0.25-1.78,0.73-2.6c2.13,3.73,8.73,6.46,16.55,6.46C113.42,87.61,120.02,84.88,122.15,81.15 L122.15,81.15L122.15,81.15L122.15,81.15z M122.07,99.28c0.53,0.87,0.81,1.79,0.81,2.75c0,5-7.74,9.06-17.28,9.06 c-9.54,0-17.28-4.06-17.28-9.06c0-0.96,0.29-1.88,0.81-2.75c2.22,3.66,8.75,6.31,16.47,6.31 C113.32,105.59,119.84,102.94,122.07,99.28L122.07,99.28L122.07,99.28L122.07,99.28z M60.04,83.04l4.5,15.63 c3.48-7.32,7.11-14.59,7.93-22.9c-1.38-1.62-2.84-3.76-4.11-5.62c-0.38-0.55-0.73-1.07-1.07-1.55c-2.79,2.04-6.13,3.32-10.41,3.3 c-4.61-0.01-8.15-1.65-11.09-4.14c-0.02,0.03-0.04,0.06-0.06,0.09c-0.48,0.66-1.01,1.44-1.59,2.29c-1.08,1.59-2.3,3.37-3.49,4.87 c1.54,9.63,5.24,16.41,8.59,23.64l4.5-15.63C48.08,73.64,65.2,73.1,60.04,83.04L60.04,83.04z M69.08,67.14 c0.36,0.51,0.76,1.1,1.19,1.72c0.79,1.16,1.66,2.44,2.53,3.6c1.68,1.45,4.25,2.58,7.22,3.53C78.08,80.39,77,85.24,77,90.35 c0,7.4,2.26,14.28,6.13,19.98H56.9H6.19c-3.88-0.29-5.85-2.3-6.19-5.78l1.34-6c0.38-4.92,1.76-8.79,4-11.76 c1.48-1.96,3.32-3.4,5.36-4.53c6.07-3.38,21.77-4.51,28.47-9.04c1.05-1.35,2.12-2.94,3.1-4.36c0.6-0.88,1.16-1.7,1.63-2.34 c0.08-0.11,0.17-0.2,0.29-0.28c-2.47-2.54-4.46-5.61-6.35-8.62l-5.1-8.12c-1.87-2.79-2.83-5.32-2.9-7.41 c-0.03-0.98,0.14-1.87,0.5-2.66c0.38-0.82,0.96-1.51,1.76-2.04c0.37-0.25,0.78-0.46,1.24-0.63c-0.33-4.4-0.45-9.95-0.24-14.59 c0.11-1.1,0.32-2.21,0.63-3.3c1.31-4.66,4.58-8.41,8.62-10.98c1.42-0.91,2.99-1.66,4.64-2.26C49.9,4.56,48.48,0.08,51.73,0 c7.62-0.17,20.1,6.27,24.97,11.54c2.83,3.07,4.61,7.12,4.99,12.5l-0.32,13.24l0,0c1.42,0.43,2.32,1.32,2.69,2.78 c0.41,1.61-0.04,3.88-1.4,6.97l0,0c-0.03,0.05-0.05,0.11-0.08,0.17l-5.82,9.58c-2.24,3.69-4.51,7.39-7.56,10.23L69.08,67.14 L69.08,67.14L69.08,67.14z"
                />
            </g>
        </MuiSvgIcon>
    );
};

export const IconOrganizer: SvgComponent = (props) => {
    return (
        <MuiSvgIcon {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.13 122.88">
            <path d="M105.87,80.26h7.88a3.4,3.4,0,0,1,1.18.2,3.2,3.2,0,0,1,1.23.76h0a3.17,3.17,0,0,1,.77,1.22h0a3.75,3.75,0,0,1,.2,1.18V99.52a3,3,0,0,1-.11.83l-.06.23a3.11,3.11,0,0,1-.74,1.19,3.27,3.27,0,0,1-.81.6,2.93,2.93,0,0,1-1.34.32h-8.2V104a19,19,0,0,1-18.93,18.93h-68A19,19,0,0,1,0,104v-85A19,19,0,0,1,18.93,0h68a19,19,0,0,1,18.93,18.93v1.83h7.88a3.29,3.29,0,0,1,1.44.32,3.18,3.18,0,0,1,1.23,1h0a3.53,3.53,0,0,1,.55,1.05h0a3.58,3.58,0,0,1,.18,1.11v15.9a2.79,2.79,0,0,1-.19,1,2,2,0,0,1-.18.4,3.05,3.05,0,0,1-.79.94,3.79,3.79,0,0,1-.56.36h0a2.94,2.94,0,0,1-1.33.33h-8.2v7h7.88a3.37,3.37,0,0,1,1.44.32h0a3.25,3.25,0,0,1,1.23,1h0a3.46,3.46,0,0,1,.5.89,3.34,3.34,0,0,1,.22,1.19v16a3,3,0,0,1-.32,1.33,3.23,3.23,0,0,1-.59.82h0a2.92,2.92,0,0,1-.83.6h0a3,3,0,0,1-1.32.32h-8.2v7.59ZM52.94,27.46a34,34,0,1,1-24,10,33.87,33.87,0,0,1,24-10ZM73.6,40.77a29.23,29.23,0,0,0-44,38.2c3.5-1.58,11.14-2.23,14.42-4.51a11.81,11.81,0,0,0,.79-1.53c.39-.91.76-1.9,1-2.57a32.4,32.4,0,0,1-2.58-3.68l-2.61-4.16a7.68,7.68,0,0,1-1.49-3.8,3,3,0,0,1,.26-1.36A2.66,2.66,0,0,1,40.86,56a63.89,63.89,0,0,1-.13-7.48,11.17,11.17,0,0,1,.32-1.69,10,10,0,0,1,4.42-5.63,13.49,13.49,0,0,1,3.7-1.64c.83-.24-.71-2.89.15-3,4.15-.42,10.87,3.37,13.77,6.5a10.19,10.19,0,0,1,2.56,6.41l-.16,6.79h0a1.87,1.87,0,0,1,1.37,1.42,5.88,5.88,0,0,1-.72,3.57h0l0,.09-3,4.91a25.92,25.92,0,0,1-3.66,5l.4.57a17.81,17.81,0,0,0,2,2.51.27.27,0,0,1,.07.08c3.25,2.3,10.92,3,14.44,4.53A29.25,29.25,0,0,0,73.6,40.77ZM86.94,7.12h-68A11.88,11.88,0,0,0,7.12,18.93v85a11.88,11.88,0,0,0,11.81,11.81h68A11.88,11.88,0,0,0,98.75,104v-85A11.88,11.88,0,0,0,86.94,7.12Z" />
        </MuiSvgIcon>
    );
};

export const IconCommittee: SvgComponent = (props) => {
    return (
        <MuiSvgIcon
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 122.88 71.04"
            sx={{ enableBackground: 'new 0 0 122.88 71.04', '.st0-committee': { fillRule: 'evenodd', clipRule: 'evenodd' }, ...props.sx }}
            xmlSpace="preserve"
        >
            <style type="text/css"></style>
            <g>
                <path
                    className="st0-committee"
                    d="M91.95,64.68l1.99-7.59l-1.37-1.5c-0.62-0.9-0.75-1.69-0.41-2.37c0.74-1.47,2.28-1.2,3.72-1.2 c1.51,0,3.37-0.29,3.84,1.6c0.16,0.63-0.04,1.29-0.48,1.97l-1.37,1.5l1.19,4.56l7.89-6.86l4.09,0.1c-1.41-2.83-3.2-5.23-5.28-7.49 c3.92,1.52,7.93,3.02,10.9,4.88c1.89,1.18,2.86,2.08,3.63,3.51c1.62,3.05,1.8,5.78,2.04,9.08l0.57,2.86h-22.24l0.02,0.07h-8.51 c-0.19,1.95-1.31,3.08-3.5,3.24H61.68H34.24c-2.2-0.17-3.32-1.3-3.5-3.27l0.76-12.04c0.21-2.78,0.99-4.98,2.26-6.66 c0.84-1.11,1.88-1.93,3.03-2.57c3.65-2.03,12.17-2.63,15.48-5.61l5.07,14.91l2.55-8.85l-1.25-1.37c-0.56-0.82-0.69-1.54-0.37-2.16 c0.68-1.34,2.08-1.09,3.39-1.09c1.37,0,3.06-0.26,3.49,1.46c0.14,0.57-0.04,1.17-0.44,1.79l-1.25,1.37l2.55,8.85l4.59-14.91 c3.31,2.98,11.84,3.58,15.48,5.61c1.15,0.64,2.2,1.46,3.03,2.57c1.27,1.68,2.05,3.87,2.26,6.66L91.95,64.68L91.95,64.68z M15.29,48.25l3.4,9.99l1.71-5.93l-0.84-0.92c-0.38-0.55-0.46-1.03-0.25-1.45c0.45-0.9,1.39-0.73,2.27-0.73 c0.92,0,2.05-0.17,2.34,0.98c0.1,0.38-0.03,0.79-0.29,1.2l-0.84,0.92l1.71,5.93l3.08-9.99c0.45,0.4,1.07,0.74,1.8,1.03 c-0.25,0.53-0.48,1.09-0.68,1.67c-0.52,1.51-0.86,3.19-1,5.06l0.01,0c0,0.04-0.01,0.09-0.01,0.13l-0.74,11.58h-5.35H2.35 C0.87,67.61,0.12,66.85,0,65.53l0.51-7.34c0.14-1.86,0.67-3.33,1.52-4.46c0.56-0.74,1.26-1.29,2.03-1.72 C6.5,50.65,13.07,50.25,15.29,48.25L15.29,48.25z M13.62,34.09c-0.33,0.03-0.58,0.1-0.76,0.22c-0.1,0.07-0.18,0.16-0.23,0.26 c-0.06,0.12-0.08,0.28-0.08,0.45c0.02,0.55,0.31,1.29,0.88,2.14l0.01,0.02l0,0l1.9,3.02c0.76,1.2,1.55,2.43,2.53,3.33 c0.93,0.85,2.06,1.43,3.56,1.43c1.62,0,2.8-0.6,3.77-1.5c1.01-0.95,1.81-2.25,2.6-3.55l2.13-3.51c0.43-0.98,0.56-1.57,0.42-1.85 c-0.09-0.17-0.44-0.22-1.02-0.17c-0.37,0.08-0.76,0.01-1.17-0.2l1.07-3.2c-3.91-0.05-6.58-0.73-9.75-2.75 c-1.04-0.66-1.35-1.42-2.39-1.35c-0.79,0.15-1.45,0.5-1.97,1.07c-0.5,0.54-0.88,1.28-1.13,2.23l0.63,3.83 C14.3,34.21,13.96,34.23,13.62,34.09L13.62,34.09z M30.55,33.14c0.46,0.14,0.8,0.4,1,0.81c0.32,0.65,0.2,1.62-0.41,3l0,0 c-0.01,0.03-0.02,0.05-0.04,0.08l-2.16,3.56c-0.84,1.38-1.69,2.76-2.83,3.83c-1.19,1.12-2.66,1.86-4.67,1.85 c-1.88,0-3.29-0.72-4.45-1.78c-1.11-1.02-1.96-2.32-2.76-3.6l-1.9-3.02c-0.71-1.06-1.07-2.02-1.1-2.82 c-0.01-0.39,0.05-0.74,0.2-1.04c0.15-0.33,0.38-0.6,0.7-0.81c0.15-0.1,0.33-0.19,0.52-0.26c-0.12-1.62-0.16-3.62-0.08-5.3 c0.04-0.41,0.12-0.82,0.23-1.23c0.49-1.73,1.7-3.13,3.21-4.09c0.53-0.34,1.11-0.62,1.73-0.84c3.65-1.32,8.48-0.6,11.07,2.2 c1.05,1.14,1.72,2.65,1.86,4.65L30.55,33.14L30.55,33.14z M49.65,19.77c-0.42,0.05-0.75,0.16-0.99,0.32 c-0.15,0.1-0.27,0.24-0.34,0.39c-0.08,0.18-0.12,0.41-0.12,0.67c0.02,0.83,0.46,1.92,1.32,3.18l0.02,0.02h0l2.83,4.51 c1.13,1.8,2.31,3.63,3.77,4.96c1.39,1.27,3.08,2.13,5.3,2.14c2.42,0.01,4.18-0.89,5.62-2.23c1.51-1.41,2.71-3.36,3.89-5.3 l3.18-5.24c0.64-1.46,0.84-2.34,0.63-2.76c-0.13-0.27-0.69-0.33-1.63-0.24c-0.07,0.01-0.14,0.01-0.21,0c-0.39,0-0.81-0.1-1.27-0.31 l1.43-4.78c-5.84-0.07-9.83-1.09-14.55-4.11c-1.55-0.99-2.02-2.12-3.57-2.01c-1.17,0.23-2.16,0.75-2.94,1.59 c-0.75,0.81-1.32,1.91-1.69,3.32l1.01,5.78C50.74,19.98,50.18,20,49.65,19.77L49.65,19.77z M75.05,18.34 c0.69,0.2,1.19,0.6,1.5,1.21c0.48,0.98,0.3,2.42-0.61,4.48l0,0c-0.02,0.04-0.04,0.08-0.06,0.11l-3.23,5.32 c-1.25,2.06-2.52,4.13-4.23,5.72c-1.78,1.67-3.97,2.78-6.97,2.77c-2.8-0.01-4.91-1.08-6.64-2.66c-1.66-1.52-2.92-3.46-4.12-5.37 l-2.83-4.51c-1.05-1.57-1.6-3.02-1.64-4.21c-0.02-0.58,0.08-1.1,0.3-1.56c0.23-0.49,0.57-0.9,1.04-1.21 c0.23-0.16,0.49-0.29,0.78-0.39c-0.17-2.41-0.23-5.39-0.12-7.9c0.06-0.61,0.18-1.22,0.35-1.83c0.72-2.59,2.54-4.67,4.79-6.1 c0.79-0.5,1.66-0.92,2.58-1.25c5.44-1.97,12.66-0.89,16.52,3.29c1.57,1.7,2.56,3.96,2.77,6.94L75.05,18.34L75.05,18.34z M84.88,42.96l2.5-0.07l2.07-0.05c-2.42-7.45-1.61-14.3,4.22-20.12c0.99,3.2,3.2,5.83,6.97,7.78c1.8,1.34,3.55,2.96,5.23,4.81 c0.3-1.23-0.84-2.73-2.23-4.27c1.28,0.63,2.46,1.52,3.29,3.22c0.97,1.98,0.95,3.64,0.64,5.79c-0.15,1-0.39,1.93-0.74,2.78h3.45 c3.64-7.79,1.33-19.34-6.11-24.24c-2.28-1.5-3.92-1.45-6.6-1.44c-3.07,0-4.63,0.1-7.26,1.83c-3.87,2.56-6.25,6.99-7.25,13.14 C82.87,35.19,82.74,40.49,84.88,42.96L84.88,42.96z"
                />
            </g>
        </MuiSvgIcon>
    );
};

export const IconSpinLoading: SvgComponent = (props) => {
    return (
        <MuiSvgIcon
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            sx={{ mx: 'auto', display: 'block', shapeRendering: 'auto', color: 'primary.main', ...props.sx }}
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <g transform="rotate(0 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(30 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(60 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(90 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(120 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(150 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(180 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(210 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(240 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(270 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(300 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(330 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" />
                </rect>
            </g>
        </MuiSvgIcon>
    );
};
