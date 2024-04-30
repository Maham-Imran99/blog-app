import { FC } from "react";
import { EditArticleForm } from "../../../components/articles/articleForms/EditArticleForm";
import { useParams, Navigate } from "react-router-dom";
import { Params } from "../../../interfaces";
import { HOME_ROUTE } from "../../../constants/routes";

export const UpdateArticlePage: FC = () => {
  const { id } = useParams<Params>();
  if (!id) {
    console.error("No ID provided, redirecting...");
    return <Navigate to={HOME_ROUTE} replace />;
  }
  return (
    <EditArticleForm articleId={id} />
  );
}