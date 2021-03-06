import { BottomButton } from '../../components/bottom-button'

const Row = ({ title, value, modified }) => (
  <div style={styles.row}>
    <span style={styles.rowTitle}>{title}</span>
    <span
      style={
        modified ? { ...styles.rowValue, color: '#767676' } : styles.rowValue
      }
    >
      {value}
    </span>
  </div>
)

export const BasicCard = ({ originalData, data, onEditClick }) => {
  return (
    <div>
      <div style={styles.block}>
        <p style={styles.title}>基本資料</p>
        <Row
          title="姓名"
          value={data.name}
          modified={originalData.name !== data.name}
        />
        <Row
          title="性別"
          value={data.gender}
          modified={originalData.gender !== data.gender}
        />
        <Row
          title="出生年月日"
          value={data.birthday}
          modified={originalData.birthday !== data.birthday}
        />
        <Row
          title="身高姓名"
          value={data.height}
          modified={originalData.height !== data.height}
        />
        <Row
          title="體重"
          value={data.weight}
          modified={originalData.weight !== data.weight}
        />
        <Row
          title="主要服務縣市"
          value={data.region}
          modified={originalData.region !== data.region}
        />
      </div>
      <div style={styles.block}>
        <p style={styles.title}>聯絡資料</p>
        <Row
          title="手機號碼"
          value={data.phone}
          modified={originalData.phone !== data.phone}
        />
      </div>
      <div style={styles.block}>
        <p style={styles.title}>收款資料</p>
        <Row
          title="銀行代碼"
          value={data.code}
          modified={originalData.code !== data.code}
        />
        <Row
          title="銀行帳號"
          value={data.account}
          modified={originalData.account !== data.account}
        />
      </div>
      <BottomButton label="修改資料" onClick={onEditClick} />
      <p style={styles.note}>
        註: 灰色字體為您修改的新資料，待管理員審核完成後即會變回黑色。
      </p>
    </div>
  )
}

const styles = {
  block: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottom: '2px solid #E0E0E0',
    paddingBottom: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 25,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  rowTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  rowValue: {
    fontSize: 17,
    fontWeight: '500',
  },
  note: {
    color: 'red',
    fontSize: 15,
    textAlign: 'left',
    marginTop: 30,
  },
}
