const dependencies = {};

export function getDependency(name) {
  if (!dependencies[name]) {
    throw new Error(`Dependency ${name} not found`);
  }
  
  return dependencies[name];
}

export function addDependency(name, dependency) {
  if (dependencies[name]) {
    throw new Error(`Dependency ${name} already exists`);
  }

  dependencies[name] = dependency;
}