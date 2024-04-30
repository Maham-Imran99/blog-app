import { FC } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Params } from "../../../interfaces";
import { HOME_ROUTE } from "../../../constants/routes";
import { ArticleDetailComponent } from "../../../components/articles/ArticleDetailPage";

export const ArticleDetailPage: FC = () => {
  const { id } = useParams<Params>();
  if (!id) {
    console.error("No ID provided, redirecting...");
    return <Navigate to={HOME_ROUTE} replace />;
  }
  return (
    <ArticleDetailComponent articleId={id} />
  );
}