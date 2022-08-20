// most efficient primenumber generator
// use async await

const getPrimes = async (start, end) => {
	let primes = [];
	for (let i = start; i <= end; i++) {
		if (isPrime(i)) {
			primes.push(i);
		}
	}
	return primes;
};

const isPrime = (num) => {
	if (num < 2) return false;

	for (let i = 2; i < num; i++) {
		if (num % i === 0) return false;
	}
	return true;
};

async function main() {
	console.log(await (await getPrimes(1, 100000)).length);
}

main();
