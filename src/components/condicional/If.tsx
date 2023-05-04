interface IfProps {
  teste: boolean;
  children: any;
}

export default function If({ teste, children }: IfProps) {
  if (teste) {
    return children;
  } else {
    return null;
  }
}
