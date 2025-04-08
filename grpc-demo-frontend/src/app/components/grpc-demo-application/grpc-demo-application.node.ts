import { ApplicationNode } from '@universal-robots/contribution-api';

export interface GrpcDemoApplicationNode extends ApplicationNode {
  type: string;
  version: string;
}
