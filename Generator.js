const testingTeam={
  lead:'Amanda',
  tester:'Bill',
  [Symbol.iterator]:function* (){
    yield this.lead;
    yield this.tester;
  }
};

const engineerTeam={
  testingTeam,
  size:3,
  department:'Engineering',
  lead:'Garen',
  manager:'Alex',
  engineer:'Dave',
  [Symbol.iterator]:function*() {
      yield this.lead;
      yield this.manager;
      yield this.engineer;
      yield* this.testingTeam;
  }
};

const names=[];
for(let name of engineerTeam){
  names.push(name);
}

console.log(names);

//[ 'Garen', 'Alex', 'Dave', 'Amanda', 'Bill' ]
