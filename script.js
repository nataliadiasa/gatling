import { check } from 'k6';
import user from "./user/index.js";

export const options = {
    vus: 15,
    duration: '5s',
    thresholds: {
        checks: ['rate>0.8'],
        http_req_duration: ['p(95) < 300000'],
    }
}

export default function (){
    const res = user()
    check(res, {
        'is status 201': (r) => r.status === 201,
    })
}