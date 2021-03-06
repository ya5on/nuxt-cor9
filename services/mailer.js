import constants from '../services/constants'
import api from '../services/api'

export default async function sendMail({ template_id, email, substitution_data, name = '' }) {
  try {
    return await api.post(constants.api.mailer, {
      template_id,
      recipients: [{ address: { email, name } }],
      substitution_data,
    })
  } catch (err) {
    console.warn('sendMail ', { err })
    throw err
  }
}
