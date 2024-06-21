import { aliasWebpack, aliasJest } from "react-app-alias";

const options = {}; // default is empty for most cases

export default aliasWebpack(options);
export const jest = aliasJest(options);
