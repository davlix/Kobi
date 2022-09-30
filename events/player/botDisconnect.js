module.exports = async(queue, client) => {
    return client.say.queueMessage(client, queue, "Musik berhenti karena saya telah terputus dari saluran suara.", "RED");
  };