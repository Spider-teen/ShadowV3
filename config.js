import fs from "node:fs";
const defaultUsers = {
    // "john": "password" //Add user pass login
};

const users = (() => {
    if (!process.env.USERS_JSON) return defaultUsers;
    try {
        const parsed = JSON.parse(process.env.USERS_JSON);
        return parsed && typeof parsed === "object" ? parsed : defaultUsers;
    } catch {
        console.warn("Invalid USERS_JSON value. Falling back to config.js default users.");
        return defaultUsers;
    }
})();

const port = Number(process.env.PORT) || 8080; // Change with PORT=xxxx

//Edit broken-sites.json to prompt the user to redirect to a fixed version of a site (ex. now.gg --> nowgg.nl)
const brokenSites = async () => {
    const sites = JSON.parse(fs.readFileSync('./broken-sites.json', 'utf8'));
    sites.lastUpdate = Date.now();
    return sites;
};

export { users, port, brokenSites };
