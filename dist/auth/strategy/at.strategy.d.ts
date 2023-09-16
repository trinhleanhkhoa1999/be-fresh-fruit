import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
declare const AtStrategy_base: new (...args: any[]) => Strategy;
export declare class AtStrategy extends AtStrategy_base {
    constructor(config: ConfigService);
    validate(payload: {
        sub: number;
        email: string;
    }): Promise<{
        sub: number;
        email: string;
    }>;
}
export {};
