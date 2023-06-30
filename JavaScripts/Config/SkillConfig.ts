

/**
 * 技能配置
 */
export default class SkillConfig {
    //所有技能信息
    public static allBasicSkill:any = [
        {
            id : "1001",
            name : "冲锋",
            type : 0,//基础近战技能
            attach : "character",//挂载到角色下
            damageType : "collision",//伤害形式为碰撞盒
            collisionShape : "box",//碰撞体形状
            collisionSize : new Vector(1,1,1),//碰撞体大小
            damage : 1,
            moveDirection : "",
            moveSpeed : ""
        },
        {
            id : "1001",
            name : "冲锋",
            type : 0,//基础近战技能
            attach : "character",//挂载到角色下
            damageType : "collision",//伤害形式为碰撞盒
            collisionShape : "box",//碰撞体形状
            collisionSize : new Vector(1,1,1),//碰撞体大小
            damage : 1,
            moveDirection : "",
            moveSpeed : ""
        }
    ]
    /**
     * 根据技能ID 获取技能信息
     * @param skillID 
     */
    static GetById(skillID: string) {
        this.allBasicSkill.forEach(basicSkill => {
            if(basicSkill.id == skillID)
                return basicSkill
        });
    }
}