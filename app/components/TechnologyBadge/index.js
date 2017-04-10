import React from 'react';
import Wrapper from './Wrapper';

import { AngularLogo, DebianLogo, DynamoDbLogo, ElasticSearchLogo, Html5Logo, JQueryLogo, NodeJsLogo, PhpLogo, RedHatLogo } from 'images';

export function AngularBadge() {
  return (
    <Wrapper className="technology">
      <AngularLogo />
      Angular 1
    </Wrapper>
  );
}

export function ElasticSearchBadge() {
  return (
    <Wrapper className="technology">
      <ElasticSearchLogo />
      ElasticSearch
    </Wrapper>
  );
}

export function DynamoDbBadge() {
  return (
    <Wrapper className="technology">
      <DynamoDbLogo />
      AWS Dynamo DB
    </Wrapper>
  );
}

export function DebianBadge() {
  return (
    <Wrapper className="technology">
      <DebianLogo />
      Debian
    </Wrapper>
  );
}

export function Html5Badge() {
  return (
    <Wrapper className="technology">
      <Html5Logo />
      HTML 5
    </Wrapper>
  );
}

export function JQueryBadge() {
  return (
    <Wrapper className="technology">
      <JQueryLogo />
      jQuery
    </Wrapper>
  );
}

export function NodeJsBadge() {
  return (
    <Wrapper className="technology">
      <NodeJsLogo />
      NodeJs
    </Wrapper>
  );
}

export function PhpBadge() {
  return (
    <Wrapper className="technology">
      <PhpLogo />
      PHP
    </Wrapper>
  );
}

export function RedHatBadge() {
  return (
    <Wrapper className="technology">
      <RedHatLogo />
      RedHat Server
    </Wrapper>
  );
}
