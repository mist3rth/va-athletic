/**
 * Logger utilitaire sécurisé pour l'environnement de développement.
 * Évite les fuites d'informations et la surcharge de console en production.
 */
export const log = {
  dev: (...args: unknown[]) => {
    if (process.env.NODE_ENV === 'development' || import.meta.env.DEV) {
      console.log('[DEV-LOG]', ...args);
    }
  },
  error: (...args: unknown[]) => {
    if (process.env.NODE_ENV === 'development' || import.meta.env.DEV) {
      console.error('[DEV-ERROR]', ...args);
    }
  },
};
