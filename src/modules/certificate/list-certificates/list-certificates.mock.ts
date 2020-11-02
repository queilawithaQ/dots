export const request = {
  "headers": {
    "Content-Type": "application/json",
  },
};
export const response = {
  "body": {
    "certificates": [
      {
        "id": "892071a0-bb95-49bc-8021-3afd67a210bf",
        "name": "web-cert-01",
        "not_after": "2017-02-22T00:23:00Z",
        "sha1_fingerprint": "dfcc9f57d86bf58e321c2c6c31c7a971be244ac7",
        "created_at": "2017-02-08T16:02:37Z",
        "dns_names": [
          ""
        ],
        "state": "verified",
        "type": "custom"
      },
      {
        "id": "ba9b9c18-6c59-46c2-99df-70da170a42ba",
        "name": "web-cert-02",
        "not_after": "2018-06-07T17:44:12Z",
        "sha1_fingerprint": "479c82b5c63cb6d3e6fac4624d58a33b267e166c",
        "created_at": "2018-03-09T18:44:11Z",
        "dns_names": [
          "www.example.com",
          "example.com"
        ],
        "state": "verified",
        "type": "lets_encrypt"
      }
    ],
    "links": {
    },
    "meta": {
      "total": 2
    }
  },
  "headers": {
    "content-type": "application/json; charset=utf-8",
    "status": 200,
    "ratelimit-limit": 1200,
    "ratelimit-remaining": 1137,
    "ratelimit-reset": 1415984218
  },
};
