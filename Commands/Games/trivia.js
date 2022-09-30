const { Trivia } = require("weky");

module.exports = {
	name: "trivia",
	description: "Main game trivia!",
	run: async(client, message, args)=> {
		await Trivia({
			message: message,
			embed: {
				title: 'Trivia',
				description: 'Kau hanya punya **{{time}}** buat jawab!',
				color: '#5865F2',
				footer: 'Kobi trivia',
				timestamp: true
			},
			difficulty: 'susah',
			thinkMessage: 'I am thinking',
			winMessage:
				'GG, jawabanya adalah **{{answer}}**. kamu berhasil jawab pada **{{time}}**.',
			loseMessage: 'Asah lagi kemampuan mu ya cuk! Jawaban yang bener adalah **{{answer}}**.',
			emojis: {
				one: '1️⃣',
				two: '2️⃣',
				three: '3️⃣',
				four: '4️⃣',
			},
			othersMessage: 'Hanya <@{{author}}> yang bisa gunain buton!',
			returnWinner: false
		});
	}
}