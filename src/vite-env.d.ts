/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CALENDLY_LINK: string;
  readonly VITE_LINKEDIN_LINK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
