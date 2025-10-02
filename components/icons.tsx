import React from 'react';

type IconProps = {
  className?: string;
};

export const YogaIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-3.5h5v-2h-5v2zm0-3h5v-2h-5v2zm-2-4l3.5-3.5 3.5 3.5-1.41 1.41L12 8.83l-2.09 2.08L8.5 12.5z"/>
  </svg>
);

export const DumbbellIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.58 16.58L18 13l-1.42 1.42L20.17 18l-3.59 3.59L18 23l5-5-1.42-1.42zM5.42 7.42L2 11l5 5 1.41-1.41L4.83 11l3.59-3.59L7 6l-1.58 1.42zM17 7h-2V5h2v2zm-4 0h-2V5h2v2zm-4 0H7V5h2v2zm6 12h-2v-2h2v2zm-4 0h-2v-2h2v2z"/>
  </svg>
);

export const WalkIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>
  </svg>
);

export const RunIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.49 5.49c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1.4-4.4c.2-.6.8-1 1.4-1h1.8c.6 0 1.1-.4 1.1-1l-1.3-3.8c-.3-.8-1-1.3-1.8-1.3h-2.5c-.8 0-1.5.5-1.8 1.3l-1.1 2.8-2.2-1.2C4.9 13.1 3 13.9 3 15.5V21h2v-5.5l2.4-.9 1.1 2.8c-.1.7.4 1.3 1.1 1.3h2.1l-.8 2.3h4.6v-2h-3.3z"/>
    </svg>
);

export const CyclingIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8.5 5.5C7.4 5.5 6.5 6.4 6.5 7.5S7.4 9.5 8.5 9.5 10.5 8.6 10.5 7.5 9.6 5.5 8.5 5.5zM12.43 10H14l-1.58-2.37C11.66 6.59 10.15 6 8.5 6c-2.37 0-4.32 1.83-4.48 4.15l-1.92.53C2.04 10.83 2 11.08 2 11.33c0 .38.25.71.61.85L5 13.2V18h2v-5.2l-2.2-.61c.21-1.93 1.84-3.44 3.7-3.44.8 0 1.55.29 2.14.79L9.57 14h2.86l2-3z"/>
    </svg>
);

export const SwimmingIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 6.5c1.11 0 2-.9 2-2s-.89-2-2-2-2 .9-2 2 .89 2 2 2zM15 20.5l4-2v-3.5L15 17V8.5l-2.79 1.86-1.42-1.42L14 6.72V3.5h-2v4l-3 2v5l-1.68-.84-1.32.52 3.5 7.32z"/>
    </svg>
);

export const MeditationIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 10.38 9.5 9s1.12-2.5 2.5-2.5m0-2C9.46 4.5 7.5 6.46 7.5 9s2 4.5 4.5 4.5 4.5-2 4.5-4.5S14.54 4.5 12 4.5zm0 9c-2.73 0-5.49.34-7.5 1.14.02.01 0 .02-.02 0-.21.08-.34.3-.26.51.08.21.3.34.51.26C6.97 14.53 9.42 14 12 14s5.03.53 7.28 1.41c.21.08.43-.05.51-.26.08-.21-.05-.43-.26-.51C17.49 13.84 14.73 13.5 12 13.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
);

export const DanceIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 8.5c-2.48 0-4.5 2.02-4.5 4.5V19h9v-6c0-2.48-2.02-4.5-4.5-4.5zM18 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h2V3h-4z" />
    </svg>
);

export const RewardsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2zm0 2.24L10.45 7.5 5.3 8.25l3.62 3.53-.86 5.16L12 14.45l4.94 2.59-.86-5.16L19.7 8.25l-5.15-.75L12 4.24z"/>
  </svg>
);

export const LogIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 9H7v-2h6v2zm3-4H7V5h9v2zm-3 8H7v-2h6v2z"/>
  </svg>
);

export const SettingsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
  </svg>
);

export const CoinIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
        <path d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-1.5 5h3v2h-3z" />
    </svg>
);

export const PaletteIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
);