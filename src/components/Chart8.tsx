
export const Chart8 = () => {
  return (
    <div className="tableWrapper">
      <div className="title">接口数量统计top5</div>
      <table>
        <thead>
        <tr>
          <th>接口名称</th><th>总次数</th><th>失败次数</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>CN_Citibank</td><td>2</td><td>3</td>
        </tr>
        <tr>
          <td>BC_SMMS</td><td>2</td><td>3</td>
        </tr>
        <tr>
          <td>CN_FKB_MO</td><td>2</td><td>3</td>
        </tr>
        <tr>
          <td>ACS</td><td>2</td><td>3</td>
        </tr>
        <tr>
          <td>BC_CRM</td><td>2</td><td>3</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};
