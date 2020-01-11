const resolvingPromise = new Promise(resolve => {
    setTimeout(() => resolve('some value'), 2000);
});

async function asyncFn1() {
    console.log('Inside asyncFn1, starting...');
    const value = await resolvingPromise;
    console.log('Inside asyncFn1, after await');
    console.log('Inside asyncFn1, value:', value);

    return value;
}

const asyncFn2 = async () => {
    console.log('Inside asyncFn2, starting...');
    const valueFromAsyncFn1 = await asyncFn1();
    console.log('Inside asyncFn2, after await');
    console.log('Inside asyncFn2, valueFromAsyncFn1:', valueFromAsyncFn1);
};

asyncFn2();