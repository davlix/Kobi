
module.exports = async(queue, client) => {

      return client.say.queueMessage(client, queue, "Ga ada lagi musik yang di putar. Keluar dari voice channel.");
};