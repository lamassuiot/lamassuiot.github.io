// Custody descriptions follow lamassuiot/engines/crypto implementations.
export const cryptoTranslations = {
  es: {
    securityLabel: 'Security Level',
    levels: [
      { name: 'SL1 · Firma en software', body: 'La clave se almacena en un gestor de secretos y Lamassu la recupera para firmar.' },
      { name: 'SL2 · Firma en el proveedor', body: 'La firma se realiza en el HSM o servicio de claves, sin recuperar la clave privada para cada firma.' },
    ],
    title: 'Motores criptográficos',
    lead: 'Elige dónde viven las claves de tus CAs. Conecta varios motores y combina proveedores en una misma PKI.',
    engines: [
      { name: 'HSM · PKCS#11', body: 'Genera y utiliza claves a través del módulo PKCS#11 de tu HSM. Los algoritmos disponibles dependen del dispositivo.', custody: 'Firma en el módulo' },
      { name: 'AWS KMS', body: 'Genera claves RSA y ECDSA y firma mediante la API de KMS sin recuperar la clave privada.', custody: 'Firma remota' },
      { name: 'AWS Secrets Manager', body: 'Genera o importa claves RSA y ECDSA, guárdalas como secretos y recupéralas para firmar en software.', custody: 'Almacenamiento de claves' },
      { name: 'Azure Key Vault', body: 'Con Keys, genera claves RSA y ECDSA y firma en Key Vault. Con Secrets, almacena las claves y firma en software.', custody: 'Keys y Secrets' },
      { name: 'HashiCorp Vault', body: 'Almacena claves RSA y ECDSA en el motor KV v2 de Vault. Lamassu recupera la clave para firmar en software.', custody: 'Vault KV v2' },
    ],
  },
  en: {
    securityLabel: 'Security Level',
    levels: [
      { name: 'SL1 · Software signing', body: 'The key is stored in a secrets manager and Lamassu retrieves it to sign.' },
      { name: 'SL2 · Provider signing', body: 'Signing takes place in the HSM or key service, without retrieving the private key for each signature.' },
    ],
    title: 'Crypto engines',
    lead: 'Choose where your CA keys live. Connect multiple engines and combine providers in a single PKI.',
    engines: [
      { name: 'HSM · PKCS#11', body: 'Generate and use keys through your HSM’s PKCS#11 module. Available algorithms depend on the device.', custody: 'Signing in the module' },
      { name: 'AWS KMS', body: 'Generate RSA and ECDSA keys and sign through the KMS API without retrieving the private key.', custody: 'Remote signing' },
      { name: 'AWS Secrets Manager', body: 'Generate or import RSA and ECDSA keys, store them as secrets and retrieve them for software signing.', custody: 'Key storage' },
      { name: 'Azure Key Vault', body: 'With Keys, generate RSA and ECDSA keys and sign in Key Vault. With Secrets, store keys and sign in software.', custody: 'Keys and Secrets' },
      { name: 'HashiCorp Vault', body: 'Store RSA and ECDSA keys in Vault’s KV v2 engine. Lamassu retrieves the key for software signing.', custody: 'Vault KV v2' },
    ],
  },
  eus: {
    securityLabel: 'Security Level',
    levels: [
      { name: 'SL1 · Sinadura softwarean', body: 'Gakoa sekretu-kudeatzaile batean gordetzen da eta Lamassuk sinatzeko berreskuratzen du.' },
      { name: 'SL2 · Sinadura hornitzailean', body: 'Sinadura HSMan edo gako-zerbitzuan egiten da, sinadura bakoitzerako gako pribatua berreskuratu gabe.' },
    ],
    title: 'Motor kriptografikoak',
    lead: 'Aukeratu non gorde zure CAen gakoak. Konektatu hainbat motor eta konbinatu hornitzaileak PKI berean.',
    engines: [
      { name: 'HSM · PKCS#11', body: 'Sortu eta erabili gakoak zure HSMaren PKCS#11 moduluaren bidez. Algoritmo erabilgarriak gailuaren araberakoak dira.', custody: 'Sinadura moduluan' },
      { name: 'AWS KMS', body: 'Sortu RSA eta ECDSA gakoak eta sinatu KMSaren APIaren bidez, gako pribatua berreskuratu gabe.', custody: 'Urruneko sinadura' },
      { name: 'AWS Secrets Manager', body: 'Sortu edo inportatu RSA eta ECDSA gakoak, gorde sekretu gisa eta berreskuratu softwarean sinatzeko.', custody: 'Gakoen biltegiratzea' },
      { name: 'Azure Key Vault', body: 'Keys erabiliz, sortu RSA eta ECDSA gakoak eta sinatu Key Vaulten. Secrets erabiliz, gorde gakoak eta sinatu softwarean.', custody: 'Keys eta Secrets' },
      { name: 'HashiCorp Vault', body: 'Gorde RSA eta ECDSA gakoak Vaulten KV v2 motorrean. Lamassuk gakoa berreskuratzen du softwarean sinatzeko.', custody: 'Vault KV v2' },
    ],
  },
} as const;
