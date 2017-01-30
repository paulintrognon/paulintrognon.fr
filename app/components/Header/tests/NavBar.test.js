import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import NavBar from '../NavBar';
import NavLink from '../NavLink';

describe('<NavBar />', () => {
  it('should render a NavBar tag', headerTagTest);
  it('should select "skills" if location is /', selectSkillsTest);
  it('should select "experiences" if location is /experiences', selectExperiencesTest);
  it('should select "projects" if location is /projects', selectProjectsTest);
});

function headerTagTest() {
  const renderedComponent = shallow(<NavBar />);
  expect(renderedComponent.type()).toEqual('nav');
}

function selectSkillsTest() {
  const renderedComponent = shallow(<NavBar pathname="/" />);
  expect(renderedComponent.find(NavLink).at(0).hasClass('active')).toEqual(true);
  expect(renderedComponent.find(NavLink).at(1).hasClass('active')).toEqual(false);
  expect(renderedComponent.find(NavLink).at(2).hasClass('active')).toEqual(false);
}

function selectExperiencesTest() {
  const renderedComponent = shallow(<NavBar pathname="/experiences" />);
  expect(renderedComponent.find(NavLink).at(0).hasClass('active')).toEqual(false);
  expect(renderedComponent.find(NavLink).at(1).hasClass('active')).toEqual(true);
  expect(renderedComponent.find(NavLink).at(2).hasClass('active')).toEqual(false);
}

function selectProjectsTest() {
  const renderedComponent = shallow(<NavBar pathname="/projects" />);
  expect(renderedComponent.find(NavLink).at(0).hasClass('active')).toEqual(false);
  expect(renderedComponent.find(NavLink).at(1).hasClass('active')).toEqual(false);
  expect(renderedComponent.find(NavLink).at(2).hasClass('active')).toEqual(true);
}
