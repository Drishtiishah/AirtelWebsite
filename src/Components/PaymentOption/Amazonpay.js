import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image2 from '../../Assets/Payment/Amazonpay.png'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons2() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
      <Button href="https://amazonpay.amazon.in/ap/signin?clientContext=258-9495545-0954100&openid.return_to=https%3A%2F%2Famazonpay.amazon.in%2Fv1%2Finitiate-payment%3FredirectUrl%3Dhttps%253A%252F%252Fpaydigi.airtel.in%252Fpg-service%252Fv1%252Fredirection%252Ffrom-wallet%253FquickSilverParams%253DNjg0Njk1NDc1MDY5OTUzNjM4NA%253D%253D%26iv%3Ddbp%252BSYvU1KRIHdNhfBLLuA%253D%253D%26payload%3D5TQqTbQRfUB%252B1deMpUnURvLd4ISinhCiHma4Pyu2OJKzUmXJHH0%252FN4bPYYTLqsgY74hmI04G8nRuGOlNyrl8yShScu12A9iFu5A7lWWnKHBlfp8dKgdLYf02S7OmoK5zu3cY7K5YvOjhmvS72LdOm%252BJxoyz0pSLm1D3rGGFzjpXA%252BWgDr%252BfSWumFSIrsVAPAXicSajGMqcf8w6yZueKHzg6bxVUbCVVIdAhnZuR%252BgfHPG%252FmtUdTWR9eVRbziwRBC35unhRmtTjE8MoBYDarHN2h3d8xEvABXzwhKdYYQoBd3S9O0XB5vgCnPgaYCum4p3WkOjlJKmJYIquzCIx6sfg85xboZWsXEMtLXf4IV%252BL2rSJZiuFk%253D%26key%3DCUQLEUYMtde9hMuBKq04%252F3bDD4Gu5ckdcGWn33mBmrnvdaQGhkWxvbVJ%252BKgksjn1uPWmbp9MILvm3Cvv7bwGyC%252FagU28KhTscDH27eo2xHKN7%252FEobfJY%252BdHOGAV3F41JXuLN4DFOiW4KzH3HRm11pU%252FGJuT9LQ9Ros4qQhhwFgJ0Z2gRjDUiEs9Oo16X8k%252BtZenQIuUBzydkQArQRnTO67%252FzpP9vTH1uVEzewMFHeRxg66OBXpzIDXg7VcMmdb8DZlqPnvTOFaxn1lV0tK2Di38IDLgugSsQc4eXOS%252FIJLCdYpQVVlyj%252Fr3Znw%252BnnBlEphCwWpUzwADxdrUObSVnIQ%253D%253D&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amazon_pay_in_mobile&openid.mode=checkid_setup&marketPlaceId=A3FDG49KKM823Y&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=amzn_pay_in&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.pape.max_auth_age=5400&siteState=clientContext%3D257-4157290-2737662%2CsourceUrl%3Dhttps%253A%252F%252Famazonpay.amazon.in%252Fv1%252Finitiate-payment%253FredirectUrl%253Dhttps%25253A%25252F%25252Fpaydigi.airtel.in%25252Fpg-service%25252Fv1%25252Fredirection%25252Ffrom-wallet%25253FquickSilverParams%25253DNjg0Njk1NDc1MDY5OTUzNjM4NA%25253D%25253D%2526iv%253Ddbp%25252BSYvU1KRIHdNhfBLLuA%25253D%25253D%2526payload%253D5TQqTbQRfUB%25252B1deMpUnURvLd4ISinhCiHma4Pyu2OJKzUmXJHH0%25252FN4bPYYTLqsgY74hmI04G8nRuGOlNyrl8yShScu12A9iFu5A7lWWnKHBlfp8dKgdLYf02S7OmoK5zu3cY7K5YvOjhmvS72LdOm%25252BJxoyz0pSLm1D3rGGFzjpXA%25252BWgDr%25252BfSWumFSIrsVAPAXicSajGMqcf8w6yZueKHzg6bxVUbCVVIdAhnZuR%25252BgfHPG%25252FmtUdTWR9eVRbziwRBC35unhRmtTjE8MoBYDarHN2h3d8xEvABXzwhKdYYQoBd3S9O0XB5vgCnPgaYCum4p3WkOjlJKmJYIquzCIx6sfg85xboZWsXEMtLXf4IV%25252BL2rSJZiuFk%25253D%2526key%253DCUQLEUYMtde9hMuBKq04%25252F3bDD4Gu5ckdcGWn33mBmrnvdaQGhkWxvbVJ%25252BKgksjn1uPWmbp9MILvm3Cvv7bwGyC%25252FagU28KhTscDH27eo2xHKN7%25252FEobfJY%25252BdHOGAV3F41JXuLN4DFOiW4KzH3HRm11pU%25252FGJuT9LQ9Ros4qQhhwFgJ0Z2gRjDUiEs9Oo16X8k%25252BtZenQIuUBzydkQArQRnTO67%25252FzpP9vTH1uVEzewMFHeRxg66OBXpzIDXg7VcMmdb8DZlqPnvTOFaxn1lV0tK2Di38IDLgugSsQc4eXOS%25252FIJLCdYpQVVlyj%25252Fr3Znw%25252BnnBlEphCwWpUzwADxdrUObSVnIQ%25253D%25253D%2Csignature%3DJmL0j2F0j2B2jSbDXN9eUmKLEdHJIqYj3D">
      <img src={image2} alt={image2} />
        Amazon Pay
      </Button>
    </div>
  );
}
