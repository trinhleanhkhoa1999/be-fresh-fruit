import { Strategy, VerifyCallback } from 'passport-google-oauth2';
type IProfile = {
    provider: 'google';
    sub: string;
    id: string;
    displayName?: string;
    name: {
        givenName?: string;
        familyName?: string;
    };
    given_name?: string;
    family_name?: string;
    email_verified: boolean;
    verified: boolean;
    email: string;
    emails: {
        value: string;
        type: string;
    }[];
    photos: {
        value: string;
        type: string;
    }[];
    picture: string;
};
declare const GoogleStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleStrategy extends GoogleStrategy_base {
    constructor();
    validate(accessToken: string, refreshToken: string, profile: IProfile, done: VerifyCallback): Promise<void>;
}
export {};
