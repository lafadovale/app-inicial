interface IfElseProps {
  teste: boolean;
  children: any;
}

export default function IfElse({ teste, children }: IfElseProps) {
  if (teste) {
    return children[0];
  } else {
    return children[1];
  }
}
