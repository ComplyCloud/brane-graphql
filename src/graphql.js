import { Service } from '@complycloud/brane';

export default class GraphQLInterface extends Service {
  get id() { return 'graphql'; }
  get dependencies() { return ['log']; }

  async start({ log }) {
    log.info('graphql started');
  }
}
