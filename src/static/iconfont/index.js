import { createGlobalStyle } from 'styled-components'

const IconFont  = createGlobalStyle `
@font-face {font-family: "iconfont";  
  src: url('./iconfont.eot?t=1565866517028'); /* IE9 */
  src: url('./iconfont.eot?t=1565866517028#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAANoAAsAAAAAB1QAAAMcAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqCEIF3ATYCJAMQCwoABCAFhG0HSBtpBhEVlNVkX0MVkckp46rt3H4xXvNnA/Aarykx6C4f7gMSSKAAAAAAgHzKDv/t7oVQB0C1MH3KTDrIn0V5PPS/X7vz3+xiHiHRILlkD9E8dEKBED0UTid1cf9pf9+3802/QcvKzsSHM08DrUILG+I65UTKQkg1k+CAB/7uGKe/2PkAtPKCZ8JdfZ6bJxSgv89zOb0pvvp2lsvaNDatTYuPegHGAQW2J65lgRdICXJL7SJOivqtzUCAqAHmyJp3YCQaJdSLAHKWl5OGxk5YyiTXKNQnJibiBnWNVR/dB4zIz5N/tgGgagVoYOiBVyaWvnSIslaeF05Ad50PQDINGDAHcJCjyUC6otPmmObqN2kCIKxRxae3IMrzvgv4sAb/5QFRVJA6UKE4AOyDDOPTVALCZyRgfKkAFOCHdBcGQsATZAaseoIKiV4jqIziKVXu1VyNR2VDdmhWZlDD5Wvk+XXUFCJnOSUmFjPDi7eYq9vozKVpWx9YbV2JUuX9nV9YX16cQ57Y/Vt6/keI2uf+f3rCyV0b3//wSAojb1tXhcbq11EtcREarreJGgYvjvx1N/2TvbEZjZ34lsgOGZ+V3sZI1+hjoscxC632Vf6EwfqMdTrrziVkwxXUlJ3S38CnxLNWmd2yw1zg/x3qG1NOkXIfLRwAuGmCvB/ik9iuA6Ku0kFbt7GCqw3IyWVppNomyJlweoECUc0AxnlA1uMVdoXNhQDRqM+CatAPptEgybHDENBiDIIaLULUEJ/pYnqUKyJFAKa6PIRO26i0e0XR6YBM1vaHuoV/NIyiio7nmC7YtYysc2UReMQU/lIWKcmI23dU8T2STx5Y1yC5Z1iXxWi33vZzd5CwVwxxX8nee0bMKkG33nbgXJG2Kkfk16n3+nKzYVMXWkdKlDquWBDwIEZCv0gmokiM1/Y6g/ffg8QnLmAXZCvlZ2A5WeNkZ227gbyzyk2yX9nF+ZLY8zyGMJYikFuvHXCcQvR0uxxEvLX0QFK7tMHV2Fbr+nm7gHAdNEPnyqiiREZNfZcrh3pgrfoeCDgXJFhFmY04SiU=') format('woff2'),
  url('./iconfont.woff?t=1565866517028') format('woff'),
  url('./iconfont.ttf?t=1565866517028') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1565866517028#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
export default IconFont