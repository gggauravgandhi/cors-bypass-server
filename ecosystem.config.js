module.exports = {
  apps: [{
    name: 'cors-bypass-server',
    script: './cors-anywhere.js',
    exec_mode: 'cluster',
    time: true,
    out_file: './logs/cors-bypass-server-output.log',
    error_file: './logs/cors-bypass-server-error.log',
    instances: 2,
    env: {
      NODE_ENV: 'production',
      CORSANYWHERE_RATELIMIT: '1 5',
      watch: false,
    },
    env_development: {
      NODE_ENV: 'development',
      watch: ['.'],
    },
  }],
};
