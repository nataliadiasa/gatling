import { check, sleep } from 'k6';
import user from "../user/index.js";

export default function() {
    const res = user()
    check(res, {
        'is status 201': (r) => r.status === 201,
    })

    sleep(1);
}