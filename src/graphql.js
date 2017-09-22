import { Module } from '@complycloud/brane';

export default class GraphQLInterface extends Module {
  get name() { return 'graphql'; }
  get dependencies() { return ['log']; }

  async start({ log }) {
    log.info('graphql started');
  }
}
