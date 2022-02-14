interface Config extends NodeJS.ProcessEnv {
    [key: string]: any;
    ITEMS_PER_PAGE: number,
}

const Config: Config = {
    ...process.env,
    ITEMS_PER_PAGE: 4,
};

// Be able to see the current configuration during development
if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(Config);
}

export default Config;
