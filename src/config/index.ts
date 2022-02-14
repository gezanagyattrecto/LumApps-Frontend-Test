interface Config extends NodeJS.ProcessEnv {
    [key: string]: any;
}

const Config: Config = {
    ...process.env,
};

// Be able to see the current configuration during development
if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(Config);
}

export default Config;
