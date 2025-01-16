module.exports = {
    apps: [
        {
            name: 'netflixus', // Le nom de votre application
            script: 'serve', // Utilisez le serveur HTTP pour servir les fichiers générés par Vite
            args: 'dist', // Le dossier où se trouvent les fichiers générés (dist)
            cwd: '/var/www/netflixus_app',  // Le chemin où se trouve votre dossier dist
            instances: 'max', // Nombre d'instances à exécuter (1 dans ce cas, mais vous pouvez en augmenter le nombre pour la mise à l'échelle)
            exec_mode: 'cluster', // Mode de clustering si vous voulez répartir la charge sur plusieurs cœurs
        },
    ],
};
