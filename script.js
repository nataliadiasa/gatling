import { check } from 'k6';
import user from "./user/index.js";

export const config = {
    thresholds: {
        http_req_duration: ['p(95) < 300000'],
        checks: ['rate > 0.8']
    }
}

export default function (){
    const res = user()
    check(res, {
        'is status 201': (r) => r.status === 201,
    })
}