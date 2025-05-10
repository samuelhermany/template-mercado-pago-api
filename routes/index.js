// Step 1: Import the parts of the module you want to use
const { MercadoPagoConfig, Payment } = require("mercadopago");

// Step 2: Initialize the client object
const client = new MercadoPagoConfig({
  accessToken: "APP_USR-7248454880058799-050823-51928bbb554ac3ff670098136e297219-82172604",
  options: { timeout: 5000 },
});

// Step 3: Initialize the API object
// const order = new Order(client);
const payment = new Payment(client);

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express v0.0.1' });
});


// const MOCK_RESULT = {
//   "accounts_info": null,
//   "acquirer_reconciliation": [],
//   "additional_info": {
//     "tracking_id": "platform:v22|v22.14.0,so:so;,type:SDK2.5.0,security:none"
//   },
//   "authorization_code": null,
//   "binary_mode": false,
//   "brand_id": null,
//   "build_version": "3.104.0-rc-3",
//   "call_for_authorize_id": null,
//   "callback_url": null,
//   "captured": true,
//   "card": {},
//   "charges_details": [
//     {
//       "accounts": {
//         "from": "collector",
//         "to": "mp"
//       },
//       "amounts": {
//         "original": 0.04,
//         "refunded": 0
//       },
//       "client_id": 0,
//       "date_created": "2025-05-09T22:34:31.205-04:00",
//       "id": "110649363597-001",
//       "last_updated": "2025-05-09T22:34:31.205-04:00",
//       "metadata": {
//         "reason": "",
//         "source": "rule-engine"
//       },
//       "name": "mercadopago_fee",
//       "refund_charges": [],
//       "reserve_id": null,
//       "type": "fee"
//     }
//   ],
//   "charges_execution_info": {
//     "internal_execution": {
//       "date": "2025-05-09T22:34:31.182-04:00",
//       "execution_id": "01JTW0PKV04QENPA3JEQBBBK6G"
//     }
//   },
//   "collector_id": 82172604,
//   "corporation_id": null,
//   "counter_currency": null,
//   "coupon_amount": 0,
//   "currency_id": "BRL",
//   "date_approved": null,
//   "date_created": "2025-05-09T22:34:31.204-04:00",
//   "date_last_updated": "2025-05-09T22:34:31.204-04:00",
//   "date_of_expiration": "2025-05-10T22:34:30.990-04:00",
//   "deduction_schema": null,
//   "description": "Pagamento de teste v03",
//   "differential_pricing_id": null,
//   "external_reference": null,
//   "fee_details": [],
//   "financing_group": null,
//   "id": 110649363597,
//   "installments": 1,
//   "integrator_id": null,
//   "issuer_id": "12501",
//   "live_mode": true,
//   "marketplace_owner": null,
//   "merchant_account_id": null,
//   "merchant_number": null,
//   "metadata": {},
//   "money_release_date": null,
//   "money_release_schema": null,
//   "money_release_status": "released",
//   "notification_url": null,
//   "operation_type": "regular_payment",
//   "order": {},
//   "payer": {
//     "email": null,
//     "entity_type": null,
//     "first_name": null,
//     "id": "2332588673",
//     "identification": {
//       "number": null,
//       "type": null
//     },
//     "last_name": null,
//     "operator_id": null,
//     "phone": {
//       "area_code": null,
//       "extension": null,
//       "number": null
//     },
//     "type": null
//   },
//   "payment_method": {
//     "id": "pix",
//     "issuer_id": "12501",
//     "type": "bank_transfer"
//   },
//   "payment_method_id": "pix",
//   "payment_type_id": "bank_transfer",
//   "platform_id": null,
//   "point_of_interaction": {
//     "application_data": {
//       "name": null,
//       "operating_system": null,
//       "version": null
//     },
//     "business_info": {
//       "branch": null,
//       "sub_unit": "sdk",
//       "unit": "online_payments"
//     },
//     "location": {
//       "source": null,
//       "state_id": null
//     },
//     "transaction_data": {
//       "bank_info": {
//         "collector": {
//           "account_holder_name": "Samuel Hermany",
//           "account_id": null,
//           "long_name": null,
//           "transfer_account_id": null
//         },
//         "is_same_bank_account_owner": null, "origin_bank_id": null,
//         "origin_wallet_id": null,
//         "payer": {
//           "account_id": null,
//           "branch": null,
//           "external_account_id": null,
//           "id": null,
//           "identification": {},
//           "is_end_consumer": null,
//           "long_name": null
//         }
//       },
//       "bank_transfer_id": null,
//       "e2e_id": null,
//       "financial_institution": null,
//       "qr_code": "00020126580014br.gov.bcb.pix0136fca0ce00-1533-4af1-a59b-629efe9fc5d352040000530398654044.005802BR5917SAMUELHERMANY10126015Santa Cruz do S62250521mpqrinter1106493635976304DCF6",
//       "qr_code_base64": "iVBORw0KGgoAAAANSUhEUgAABWQAAAVkAQAAAAB79iscAAANiklEQVR4Xu3XW3IkOQ5E0dxB73+XtYMYExwIJwkqZ2xM7M5QX//I4gMETuivXteD8ue1nnxy0J4L2nNBey5ozwXtuaA9F7TngvZc0J4L2nNBey5ozwXtuaA9F7TngvZc0J4L2nNBey5ozwXtuaA9F7TngvZc0J4L2nNBey5ozwXtuaA9F7TngvZc0J4L2nNBey5ozwXtuaA9F7TnMmpfa/76Ovvrvq1t3H09VUnmz9fZtMq6fusGY5da5b0zzriX2zK0Clq0Clq0Clq0Clq0Clq0CtpP1vp82fYRY4lv66x9pG+ryyhbtG8Y+/Nlixatghatghatghatghatghat8qlav19e2bjfXvfbauCzsaQ654U/vJ69YaCtBj4bS9Ci1RYtWm3RotUWLVpt0aLVFu3TtWOn8X1lAiwrb7NVbHtTtGj7T6RNu5fvynzb3lfQ9mn38l2Zb9v7Cto+7V6+K/Nte19B26fdy3dlvm3vK2j7tHv5rsy37X0FbZ92L9+V+ba9r6Dt0+7luzLftvcVtH3avXxX5tv2voK2T7uX27JRUSW7VZvjLrVatJH2Qe4XQduLxy61QruUoUW7AlyyW6F9od0Vj11qhXYpQ4t2Bbhkt0L7QrsrHrvUCu2ydZPxzLNjWG2X7vnWF5W73dBqfNYZGbRoFbRoFbRoFbRoFbRoFbRolSdrl9Tsv/unM9D+1E9noP2pn85A+1M/nYH2p346A+1P/XQG2p/66Qy0P/XTGWh/6qcz0P7UT2c8XvttWpOlcb/NZ6/8H+O+OOri/6JT8ZugRaugRaugRaugRaugRaugRas8Wfsn+zjLbZZ4Tg1bxmamz3CdPyhf+PuqczuLoHXQOmjvuA5tZLlFi1a3aNHqFi1a3aJFq9uP0uZRr/Vn7JpEeokTx23r7/PXL1v/MSJo0Spo0Spo0Spo0Spo0Spo0SoP17qxZy9nuVpGLCXLnLiYXvhMc+7kVf3Rxq9HGyu0aLVCi1YrtGi1QotWK7RotUL7aG1U+FU0rh+/yvvqNG7rWdvGKt5OvPZVu2lo0d4v7tt7GbshaNFOnXbvI2i309CivV/ct/cydkPQop067d5H0G6noUV7v7hv7+WQHSXjD3JJ/eRbZyl5zZSCfidb3Wjv+17yQttGoFWrfIE2ghatghatghatghat8kHaunRjXyzQcTsl6nO1m1i3Lh4zNR0FeTvvXmhfaNGi9e6F9oUWLVrvXmhfaNGi9e71GO1Slgm8efUtI2D5yKlVezEBlrrx06puHnQv0Y4XaCNotUKLViu0aLVCi1YrtGi1QvsMrcvqZ+m0q2uK6SwytprSit99GtoGeKFtCrRrWjFatGg3da0x2ursNVoFLVoFLVrlrNZp+Kmdt3e7IbtnnjYWu1X9jM9imy/uJdr2zNPQoq2gRbsWo0WroEWroEWroP0sbXa/xgfL1qknrS5vl4+ss1aydJmKNyXzbuUtW6eetLo2DG3uVt6ydepJq2vD0OZu5S1bp560ujYMbe5W3rJ16kmra8PQ5m7lLVunnrS6Ngxt7lbesnXqSatrw9DmbuUtW6eetLo2DG3uVt6ydepJq2vD0OZu5S1bp560ujYMbe5W3rJ16kmra8MOabMw2lXPHTTPIssXuPt7o888yMWRmjFPu5do0d7nVYYWrcrQolUZWrQqQ4tWZWjRquwZ2no/9qwmHuFtPvS2/2QD112jcf9iukX77U82cN2Fdh42dRq7R/rE1sB1F9p52NRp7B7pE1sD111o52FTp7F7pE9sDVx3oZ2HTZ3G7pE+sTVw3YV2HjZ1GrtH+sTWwHUX2nnY1GnsHukTWwPXXWjnYVOnsXukT2wNXHehnYdNncbukT6xNXDd9a/URrJ/PRi/wJm0Wfe6US6p1dIgixf89OM6tJFWUiu0EVeMK7Ro0WYxWrQqRotWxWjRqhjtp2rH2m8oyyq34akL89pHXvcMv62zb/Fj0KJV0KJV0KJV0KJV0KJV0KJVHq69zzUxLyI1Z+TFiNruzxZeobKzb90+MjW4z+4l2q+gvdBG0F5oI2gvtBG0F9oI2gttBO31PG1/dT+pi28/yBexjQYl83ZMvDB+Ko7khYM2ttEAbcVNXOunaC+04wVaBS1aBS1aBS1aBe3HaMenVwP4zO0yPtt9S60arxIvczX9RXyRQRtBi1ZBi1ZBi1ZBi1ZBi1ZB+2itUz3bg0peLJS4mIb5W7K4znLG9FVjg/5VaNFW0KJV0KJV0KJV0KJV0KJVnqvdN6mLe9J2hOval/btt52zJDLV3Wdeo0WroEWroEWroEWroEWroEWrPFebl/Vg+YJaZX/PjmHTF/jt/pm/ZTfIFxG0aBW0aBW0aBW0aBW0aBW0aJUna6tJrmrbMn1Qdn+NKyeqsun0pe0itkumW7RLogrtWDE9aEGr7RK0aBW0aBW0aBW0aBW0/5DW0P4+D6ZhbXvNs5fV9GnZtONzVbd5EEG7m40W7bBCG0GLVkGLVkGLVkGLVvl8bSTbhNs/8TRuJ5mH7X+WLG+vTd2ui5+hRaugRaugRaugRaugRaugRav8Gq23U8GmUye7LvPnq0v81EX57vbVJUviYjpDi7aCFm2V3EslO6BFq6BFq6BFq6BFqzxL+032PWM1ne2S935mfN2O5f3r0U71Y/Lez9BOQYtWQYtWQYtWQYtWQYtW+SCtX2VCFmfRuLbz+9out3Vxn1bnpamzbHdBi1ZBi1ZBi1ZBi1ZBi1ZBi1Z5rnacfX3NqWE77Q41Uno/d7kP6lumrxrbR8nY4F7GTrURtGgVtGgVtGgVtGgVtGgVtGiVJ2iXictqmf3G7ex4Llm+oH/QGLT1wnXeZBeXoK0VWrRo71u0EbRoFbRoFbRolY/RtrETZcfbGz2xxo4vYhvFvV+m+o1/mwhatApatApatApatApatApatMqTtVNtntkdZ4vCPWv2viTeRgo1bqcGo9G3ub2XaNFmsg1avY2grXZo+xZtnO0oaNfb3N5LtGgz2Qat3kbQVju0ffv/aQuV6a/iOIsru7d+ZnfrUu5vg3b31s/QRtCiVdCiVdCiVdCiVdCiVR6prZ9xmF+9G+Hbpe6/PVuydEH7Qou20ub0i10syKDtaXP6xS4WZND2tDn9YhcLMmh72px+sYsFGbQ9bU6/2MWCDNqeNqdf7GJBBm1Pm9MvdrEgg7anzekXu1iQ+Z+0Eb/PJzZO2iyJT6utz/wiy/0ncEll+du0PwvaCtoKWrQKWrQKWrQKWrQKWrTK47XfNL4fq2fV31rPmS7ai+lz27Plj+G6vB13F9rlBVq0Clq0Clq0Clq0Clq0CtonaKNnvc9at+vGsd0ypxrkWd3uvt7xRRZVqwzauEWLVrdo0eoWLVrdokWrW7RodYv26drlqTO2G99PH1S3S5dcTX8Hn93NVmieoUWrM7RodYYWrc7QotUZWrQ6Q4tWZ79G6/dZ5q1TE5c6Z3kx1k0vXLf/lukZ2vFi2aJFO9RNL1yHNoMWrYIWrYIWrYIWrfIZ2jzSq8j4PlaTbDGOcfEUF1ibWf5Ku6CNoEWroEWroEWroEWroEWroH2+NmJPxdDxg2q7zB4/111cMsnK386WvxzasThW7oI2ghatghatghatghatghat8gRtH7uMaJkajwqfTV3yRf34LFf1bDQ6aC+0EbQX2gjaC20E7YU2gvZCG0F7oY08V5u1eV6UeOVtlSzt4qLhI/7IPWB65jPHz9BGCVq0KkGLViVo0aoELVqVoEWrErQP1t5Hw7Bs4tlx5i9wu4XXv2X5E+SZU3PHftNctGhdMu7yCC1aHaFFqyO0aHWEFq2O0KLV0XO0mn+nnXlY/YyNO3Q0vhrAF5mlaZVk0KJV0KJV0KJV0KJV0KJV0KJVnqttD+JsrFV2xb7w7fgZ1SBvv8EvH96+Hm3donXlAsgztGh1hhatztCi1RlatDpDi1ZnH66tsWOZ4/dTu3zoVW03E1fj+MLx3wFtBC1aBS1aBS1aBS1aBS1aBe2v0O5igEe4nUucdmGZG7jpVDe+rdsxaNEqaNEqaNEqaNEqaNEqaNEqz9WmwomepsSwdz2XZ74dW1WX8WJ51t9m0H4zEe0YtGgVtGgVtGgVtGgVtGiVD9f6vLat3dLE+FhVXZbUNv4dm1ayMvLu75BBi1ZBi1ZBi1ZBi1ZBi1ZBi1Z5uDbbLFCf1crd20dO8Wfk/Z9xlVkGLWduj3YK2ghatApatApatApatApatMpv0FZtHLsu44l1u1z4q8aL+tzldpxb/dD6drlA6/Mcgna4QIsWLdrxAi1atGjHC7S/R+ttpma7eOxXcQPXLZ+WV1WHFu0qQOtitO0ygvYrbuA6tMswbzNo0Spo0Spo0Sr/iHbZth+nf0skZ3fPss2SieeSsQHaCtoKWrQKWrQKWrQKWrQKWrTKk7VLpnbLWWS8dXFRsqTexmqM65amvo2gRaugRaugRaugRaugRaugRav8Bu3nB+25oD0XtOeC9lzQngvac0F7LmjPBe25oD0XtOeC9lzQngvac0F7LmjPBe25oD0XtOeC9lzQngvac0F7LmjPBe25oD0XtOeC9lzQngvac0F7LmjPBe25oD0XtOeC9lzQngvac0F7Lg/T/gd3Bmh1RPF3IQAAAABJRU5ErkJggg==",
//       "ticket_url": "https://www.mercadopago.com.br/payments/110649363597/ticket?caller_id=2332588673&hash=cce75379-16b9-4958-9116-427b3ae38066",
//       "transaction_id": null
//     },
//     "type": "OPENPLATFORM"
//   },
//   "pos_id": null,
//   "processing_mode": "aggregator",
//   "refunds": [],
//   "release_info": null,
//   "shipping_amount": 0,
//   "sponsor_id": null,
//   "statement_descriptor": null,
//   "status": "pending",
//   "status_detail": "pending_waiting_transfer",
//   "store_id": null,
//   "tags": null,
//   "taxes_amount": 0,
//   "transaction_amount": 4,
//   "transaction_amount_refunded": 0,
//   "transaction_details": {
//     "acquirer_reference": null,
//     "bank_transfer_id": null,
//     "external_resource_url": null,
//     "financial_institution": null,
//     "installment_amount": 0,
//     "net_received_amount": 0,
//     "overpaid_amount": 0,
//     "payable_deferral_period": null,
//     "payment_method_reference_id": null,
//     "total_paid_amount": 4,
//     "transaction_id": null
//   },
// }

router.post('/criar-pix', function (req, res, next) {
  console.log("REQUEST")
  console.log(req.body)

  const body = {
    transaction_amount: req.body.transaction_amount,
    description: req.body.description,
    payment_method_id: req.body.paymentMethodId,
    payer: {
      email: req.body.email,
      identification: {
        type: req.body.identificationType,
        number: req.body.number
      }
    }
  };

  const requestOptions = { idempotencyKey: Date.now().toString() };

  payment.create({ body, requestOptions })
    .then((result) => {
      console.log("result")
      console.log(JSON.stringify(result, null, 2)); // Formata o JSON com 2 espaços de indentação
      res.json(result);
    })
    .catch((error) => {
      console.error("error")
      console.error(JSON.stringify(error, null, 2)); // Também formata o erro
      res.status(500).json({ error: error.message || 'Erro ao criar pagamento' });
    });

  // res.send(MOCK_RESULT)
});

module.exports = router;