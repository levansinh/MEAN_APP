import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const schema = new Schema(
    {
        project_name: { type: String ,required:"true"},
        day_start: { type: String,required:"true" },
        team_size: { type: String ,required:"true"},
        }
);

export const ProjectModel = mongoose.model('Project',schema)