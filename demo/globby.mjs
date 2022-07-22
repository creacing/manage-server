import {globby} from 'globby'

const getPaths=async ()=>{
  const paths = await globby(['*']);
  console.log(paths);
}

getPaths()