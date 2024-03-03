declare module 'package.json' {
  interface PeerDependencies {
    react: string;
  }
  const peerDependencies: PeerDependencies;
  export default peerDependencies;
}
