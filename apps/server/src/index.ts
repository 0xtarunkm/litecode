import * as amqp from 'amqplib';

interface Playground {
  name: string;
  environment: string;
}

async function startConsumer() {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = 'playground';
    await channel.assertQueue(queue, { durable: true });

    channel.consume(
      queue,
      async (msg) => {
        if (msg) {
          const Playground: Playground = JSON.parse(msg.content.toString());
          channel.ack(msg);
        }
      },
      { noAck: false }
    );
  } catch (error) {
    throw new Error(
      'Error connecting to RabbitMQ or consuming messages:',
      error!
    );
  }
}

startConsumer();
