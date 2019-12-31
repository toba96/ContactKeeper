const lists = ['abc', 'def', 'ghi'];
let real = [],
	one = [],
	aster = [],
	questions = [];

for (i = 0; i < lists[0].length; i++) {
	one += '*';
}
real.push(one, ...lists);

for (i = 0; i < real.length; i++) {
	aster.push('*');

	for (j = 0; j < real.length - 1; j++) {
		aster[i] += real[i][j];
	}
	aster[i] += '*';
}
questions.push(...aster, aster[0]);

console.log(questions);
