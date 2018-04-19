var filter = {
    "and": [{
        "and": [{
            ">=": {
                "update_at": "2017-12-21 18:00:00"
            },
            "<=": {
                "update_at": "2017-12-22 02:00:00"
            },
            "=": {
                "severity": "2"
            }
        }]
    }]
}
console.info(encodeURIComponent(JSON.stringify(filter)));