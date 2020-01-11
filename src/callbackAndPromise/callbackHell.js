$.get(url1, {
    success: data => {
        const url2 = data.url;
        $.get(url2, {
            success: data => {
                const url3 = data.url;
                $.get(url3, {
                    success: data => {
                        // keep going...
                    },
                    error: error => {
                        // handle error for url3
                    }
                });
            },
            error: error => {
                // handle error for url2
            }
        });
    },
    error: error => {
        // handle error for url1
    }
});