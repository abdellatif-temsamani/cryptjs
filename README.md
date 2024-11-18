## TODO

- [ ] tests use something like `jest`
- [ ] add sha256
- [ ] return object in form of {hash, salt, `$6$${k}`}

```typescript
type SaltedHash = `$6$${string}$${string}`;

type Sha = {
  hash: string;
  salt: string;
  saltedHash: SaltedHash;
};
```
