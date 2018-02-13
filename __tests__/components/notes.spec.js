import React, { Component } from "react";
import Note from '../../src/components/notes';

describe('edit', ()=>{
  it('should set isEditing to true', ()=>{
    expect(edit()).toEqual(true)
  });
});
