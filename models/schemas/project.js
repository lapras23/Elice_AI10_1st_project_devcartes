const { Schema } = require("mongoose");

// < mongoose-sequence 1 > 아래 두개를 가져와 주세요.
const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

// < mongoose-sequence 2 > 스키마에서 <MVP명>ID 항목을 삭제해 주세요.
const ProjectSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

// < mongoose-sequence 3>
// 1. ProjectSchema의 "Proejct" 부분을 MVP 이름에 맞게 수정해주세요.
// 2. id 필드 이름을 MVP에 맞게 수정해주세요. 예시) OOO_sequence (잊지 말고 해주셔야 합니다!!!!!!!!!)
// 3. inc_field 이름을 MVP에 맞게 수정해주세요. 예시) awardId, educationId, certificateId
// 4. 해당 MVP routes의 Create 부분에 <MVP명>Id 빼주셔야 합니다.
//   예시)
//     const project = await Project.create({
//       userId,
//       projectId, <------------------------------------------- 삭제!!!
//       title,
//       startDate,
//       endDate,
//       details,
//     });
// 4. Reset 방법 - MongoDB Compass > Counter Collection > 해당 필드 값을 0으로 수정해 주세요.
ProjectSchema.plugin(AutoIncrement, {
  id: "project_sequence",
  reference_fields: "userId",
  inc_field: "projectId",
});

module.exports = ProjectSchema;
